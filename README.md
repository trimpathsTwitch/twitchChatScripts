Trimpaths Nightbot Commands
-----

This repository is a source for the more complex Nightbot commands that are used on https://www.twitch.tv/trimpaths. Not all commands use this script-driven format, but those that need complex randomization logic or are just too long for Nightbot's character limit can live here.

While the scripts should update in Nightbot immediately once they are pushed to github, sometimes Nightbot's webcache gets stuck. In that case, just re-run the edit command in chat to force Nightbot to refresh.
For the `propoganda` command, this looks like:
`!commands edit !propaganda $(eval $(urlfetch json https://raw.githubusercontent.com/trimpathsTwitch/twitchChatScripts/master/propaganda.js))`

No scripts currently support the Nightbot macros (yet).
