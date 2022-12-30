let example_text: string = `import {Spot, Command, CommandListener, EventListener, Event, Message } from "discord-spot";

@CommandListener
@EventListener
class TestBot extends Spot {                   
    constructor() {
        super();
                        
        this.run();
    }     

    @Event("ready")
    onReady(spot: Spot) {
        console.log("Bot is ready.")
    }

    @Command("ping")
    flip(spot: Spot, message: Message, args: string[]) {
        message.reply("Pong!");
    }
}
                        
new TestBot();`

function copy_btn(): void {
    let btn: JQuery<HTMLElement> = $(".copy");

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