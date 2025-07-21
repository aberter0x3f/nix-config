set -e
set -o pipefail

# Get all window information from Niri
state="$(niri msg -j windows)"
# Get the currently focused window information from Niri
active_window="$(niri msg -j focused-window)"

# Extract the ID of the currently focused window
current_id="$(echo "$active_window" | jq -r '.id')"

# Format the window list for wmenu: ID, Workspace ID, Title
# Niri's 'windows' output lists all windows, even on inactive workspaces.
# 'jq' is used as in the original script.
window="$(echo "$state" |
  jq -r '.[] | "\(.id)    \(.workspace_id)    \(.title)"' |
  # Mark the focused window
  sed "s|$current_id|focused ->|" |
  sort -r |
  wmenu -l 10 -i -p 'window')"

# Parse the selected window's ID and Workspace ID
# Note: Niri uses numerical workspace_id, not names.
id="$(echo "$window" | awk '{print $1}')"
ws_id="$(echo "$window" | awk '{print $2}')" # This variable is not strictly needed for focusing, but kept for consistency if you want to display it.

# If the selected window is already focused, exit
if [[ "$id" =~ focused* ]]; then
  exit 0
fi

# The original script had a 'fullscreen_on_same_ws' check specific to Hyprland.
# This is generally not needed for Niri's focus logic, as 'focus-window'
# handles workspace switching and window state automatically.
# If you need specific fullscreen interaction, it would be a separate Niri action.

# If a window was selected (i.e., $window is not empty), focus it using its ID
if [[ -n "$window" ]]; then
  niri msg action focus-window --id "${id}"
fi
