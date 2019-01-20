workflow "NPM Publish" {
  on = "push"
  resolves = [
    "Publish",
  ]
}

action "Install" {
  uses = "actions/npm@de7a3705a9510ee12702e124482fad6af249991b"
  args = "install"
}

action "Publish" {
  uses = "actions/npm@de7a3705a9510ee12702e124482fad6af249991b"
  args = "publish --access public"
  secrets = ["NPM_AUTH_TOKEN"]
  needs = ["Install"]
}
