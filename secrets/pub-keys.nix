rec {
  user1 = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC1rU3b0FfP//tNrfSEGJxvZ1p9t2Kdn9HSmgKNx5BSsjR308O/Q98aMaf2jELjgqjhBmKkg1XzqY9rBcqoYhi5wSQS/9kzBrB/uxaGarQzTnnNlqlGY++VSmp324c98u1y8OcgKqyGBDwaoumS40qgFtGqiRAoSw1ZdRd89SNWlnpJd7kk/gGqUbH1yUP2VdiFWZue52pnc98gwD4NpS8ZLmwB/75vVpjMGWpYk0DZDKSc8IovfXifU5nybfb3BvYwvGGqGTKROjEWzU8WFt7m/Msqezv45nFUy88ugTcw+iZVJebjJ2psE1Js6WiBTm6rNF95Mk7y+O51Uo/4wdg2cDhwSLQKLBTp6xWfjnWdW1FeuuOY+8wttE1cK3CcPmdN3lkkgNiN1ZcaBm6QPeJh/1hAbZVoZzv6jP4kPIEoQKQNkLDYKFsbk1akRLdeNkZXByrmcnMeqhGANx8H/FulBIuCl4EbeJjCFyJQ1uBztn2xJEx9WCVq2mzXvlKQnfc= aberter@aberter-thinkbook";
  users = [ user1 ];

  system1 = "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIJq7eek4lOAD+gU/3v2l2aDPBPrT2wdhC2i1DS0JL5e0 root@aberter-thinkbook";
  system2 = "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIG4KnM2lwPlXyQmmzUGqWwO2XhtAVxj2PfHzLNQzkGBp root@aberter-thinkstation";
  systems = [
    system1
    system2
  ];
  all = users ++ systems;
}
