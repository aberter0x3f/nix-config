let
  pub-keys = import ./pub-keys.nix;
in
{
  "mieru.age".publicKeys = pub-keys.all;
  "passwd.age".publicKeys = pub-keys.all;
  "sing-box.age".publicKeys = pub-keys.all;
}
