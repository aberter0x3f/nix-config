ip_icon="󰩟"
disconnected_icon="󰪎"

ip=$(curl -s 'https://api.ipify.org')

if [ $? -eq 0 ]; then
  echo "{\"icon\": \"$ip_icon\", \"text\": \"$ip\"}"
else
  echo "{\"icon\": \"$disconnected_icon\", \"text\": \"Disconnected\"}"
fi
