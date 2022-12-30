var example_text = "import {Spot, Command, CommandListener, EventListener, Event, Message } from \"discord-spot\";\n\n@CommandListener\n@EventListener\nclass TestBot extends Spot {                   \n    constructor() {\n        super();\n                        \n        this.run();\n    }     \n\n    @Event(\"ready\")\n    onReady(spot: Spot) {\n        console.log(\"Bot is ready.\")\n    }\n\n    @Command(\"ping\")\n    flip(spot: Spot, message: Message, args: string[]) {\n        message.reply(\"Pong!\");\n    }\n}\n                        \nnew TestBot();";
function copy_btn() {
    var btn = $(".copy");
    btn.click(function () {
        if (!btn.attr("style")) {
            navigator.clipboard.writeText(example_text);
            btn.attr("style", "color: #00d431");
            btn.children("i")[0].classList.add("fa-check");
            btn.children("span")[0].innerText = "Copied!";
            setTimeout(function () {
                btn.removeAttr("style");
                btn.children("i")[0].classList.remove("fa-check");
                btn.children("span")[0].innerText = "Copy";
            }, 3000);
        }
    });
}
