with import <nixpkgs> {};
stdenv.mkDerivation {
  name = "septastic_env";
  nativeBuildInputs = [ pkg-config ];
  buildInputs = [
    cryptsetup
  ];
}
