import { log } from "@graphprotocol/graph-ts";
import { NowTokenPrice } from '../generated/Cfx/nest3price';
import { TokenPrice } from '../generated/schema';

export function handleNowTokenPrice(event: NowTokenPrice): void {
    log.info("NowTokenPrice: {}", [event.params.a.toHex(), event.params.b.toString(), event.params.c.toString()]);
    let id = event.params.a.toHex();
    log.info ("id: {}", [id]);
    let tokenprice = TokenPrice.load(id);
    if (tokenprice == null) {
        tokenprice = new TokenPrice (event.params.a.toHex());
    }
    tokenprice.ethAmount = event.params.b;
    tokenprice.erc20Amount = event.params.c;
    tokenprice.save();
}
