# Node.js version management: no subshells, no profile setup,
# no convoluted API, just simple.

sudo npm cache clean -f
sudo npm install -g n
sudo n stable

# To upgrade to latest version (and not current stable) version.
sudo n latest
