Trimpaths Nightbot Commands
-----

This repository is a source for the more complex Nightbot commands that are used on https://www.twitch.tv/trimpaths. Not all commands use this script-driven format, but those that need complex randomization logic or are just too long for Nightbot's character limit can live here.

While the scripts should update in Nightbot immediately once they are pushed to github, sometimes Nightbot's webcache gets stuck. In that case, just re-run the edit command in chat to force Nightbot to refresh.
For the `propoganda` command, this looks like:
`!commands edit !propaganda $(eval $(urlfetch json https://raw.githubusercontent.com/trimpathsTwitch/twitchChatScripts/master/propaganda.js))`

If you add extra javascript, the script linked in `urlfetch` will have access to the Nightbot macros.
In this snippet, the executed JavaScript has access to the `$(user)` macro as `params.userId` and the `$(query)` macro as `params.query`.
`$(eval var params={userId:'$(user)',query:'$(query)'}; $(urlfetch json <url>))`
