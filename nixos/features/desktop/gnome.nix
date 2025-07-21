{
  pkgs,
  ...
}:
{
  imports = [
    ./common
  ];

  services.xserver.enable = true;

  services.xserver.displayManager.gdm.enable = true;
  services.xserver.desktopManager.gnome.enable = true;

  environment.gnome.excludePackages = with pkgs; [
    #adwaita-icon-theme #start with this, change this later
    ##baobab #??? disk analyzer that might help desktop work
    cheese # webcam not welcome as a default
    epiphany # web browser, no need with firefox
    evince # document viewer, no need with LibreOffice
    geary # email client, develop if wanted

    gnome-backgrounds # until you customize
    #gnome-bluetooth #no need right now
    gnome-calculator # until you find a better one
    gnome-calendar # no need
    #gnome-characters #Keeping active for convience
    gnome-clocks # no need
    #gnome-color-manager #default screen correction, good to start with, upgrade later
    #gnome-control-center #??? for desktop functionality?
    #gnome-font-viewer #no need
    #gnome-initial-setup #???
    #gnome-logs #???
    gnome-maps # no need
    gnome-music # no need
    #gnome-system-monitor #???
    #gnome-themes-extra #for the rizz
    gnome-weather # weather app, no need

    #pkgs.glib #helps gsettings program and others I believe
    #pkgs.gnome-connections #???
    pkgs.gnome-contacts # basic contacts app, no need
    pkgs.gnome-console # nice to start with
    #pkgs.gnome-menus #good for the desktop to start with
    pkgs.gnome-online-accounts # I don't want this as a default
    pkgs.gnome-photos # no need
    #pkgs.gnome-text-editor #it's a useful notepad to start with
    pkgs.gnome-tour # GNOME Shell detects the .desktop file on startup, no need
    #pkgs.gnome-user-docs #useful reference to start with
    #X-pkgs.gtk3.out #gtk-launch program, keep for desktop
    pkgs.loupe # image viewer
    #X-pkgs.orca #screen reader that keeps the desktop functional, only diable if needed
    #pkgs.snapshot #no need but remove later
    #X-pkgs.xdg-user-dirs #update user directories, don't disable unless you know what you're doing

    #nautilus #file manager, functional to start
    simple-scan # ???no need but test later
    totem # video player
    yelp # help viewer
    decibels # audio player
  ];

  environment.systemPackages = [ pkgs.gnomeExtensions.appindicator ];
  services.udev.packages = [ pkgs.gnome-settings-daemon ];
}
