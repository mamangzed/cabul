import fetch from 'node-fetch';
import { stringify } from 'query-string';

interface CabulClientOptions {
    url: string;
}

interface CabulResponse {
    code: number;
    url: string;
}

/**
 * Client for Cabul Wrapper
 */
class CabulClient {
    private baseURL: string;

    constructor(
        options: CabulClientOptions = {
            url: 'http://192.145.238.5/~pasirm5/v3'
        }
    ) {
        this.baseURL = options.url;
    }

    /**
     * Hentai endpoint
     */
    hentai() {
        return this.get('hentai').then((body) => body);
    }

    /**
     * Ecchi endpoint
     */
    ecchi() {
        return this.get('ecchi').then((body) => body);
    }

    /**
     * Netorare endpoint
     */
    netorare() {
        return this.get('netorare').then((body) => body);
    }

    /**
     * Kemonomimi endpoint
     */
    kemonomimi() {
        return this.get('kemonomimi').then((body) => body);
    }

    /**
     * Yuri endpoint
     */
    yuri() {
        return this.get('yuri').then((body) => body);
    }

    /**
     * Thicc endpoint
     */
    thicc() {
        return this.get('thicc').then((body) => body);
    }

    /**
     * Ahegao endpoint
     */
    ahegao() {
        return this.get('ahegao').then((body) => body);
    }

    /**
     * Monster endpoint
     */
    monster() {
        return this.get('monster').then((body) => body);
    }

    /**
     * Bondage endpoint
     */
    bondage() {
        return this.get('hentaibondage').then((body) => body);
    }

    /**
     * Trap endpoint
     */
    trap() {
        return this.get('trap').then((body) => body);
    }

    /**
     * Pantsu endpoint
     */
    pantsu() {
        return this.get('pantsu').then((body) => body);
    }

    /**
     * Milf endpoint
     */
    milf() {
        return this.get('milf').then((body) => body);
    }

    /**
     * Zettairyouiki endpoint
     */
    zettairyouiki() {
        return this.get('zettairyouiki').then((body) => body);
    }

    /**
     * Nekomimi endpoint
     */
    nekomimi() {
        return this.get('nekomimi').then((body) => body);
    }

    /**
     * Paizuri endpoint
     */
    paizuri() {
        return this.get('paizuri').then((body) => body);
    }

    /**
     * Booty endpoint
     */
    booty() {
        return this.get('booty').then((body) => body);
    }

    /**
     * Waifusgonewild endpoint
     */
    waifusgonewild() {
        return this.get('waifusgonewild').then((body) => body);
    }

    /**
     * Gameovergirls endpoint
     */
    gameovergirls() {
        return this.get('gameovergirls').then((body) => body);
    }

    /**
     * Sukebei endpoint
     */
    sukebei() {
        return this.get('sukebei').then((body) => body);
    }

    /**
     * Cum endpoint
     */
    cum() {
        return this.get('cum').then((body) => body);
    }

    /**
     * Corruptionhentai endpoint
     */
    corruptionhentai() {
        return this.get('corruptionhentai').then((body) => body);
    }

    /**
     * Chiisai endpoint
     */
    chiisai() {
        return this.get('chiisai').then((body) => body);
    }

    /**
     * Muchi endpoint
     */
    muchi() {
        return this.get('muchi').then((body) => body);
    }

    /**
     * Tentai endpoint
     */
    tentai() {
        return this.get('tentai').then((body) => body);
    }

    /**
     * Dekai endpoint
     */
    dekai() {
        return this.get('dekai').then((body) => body);
    }

    /**
     * Yaoi endpoint
     */
    yaoi() {
        return this.get('yaoi').then((body) => body);
    }

    /**
     * Oral endpoint
     */
    oral() {
        return this.get('oral').then((body) => body);
    }

    /**
     * Armpits endpoint
     */
    armpits() {
        return this.get('armpits').then((body) => body);
    }

    /**
     * Bodysuits endpoint
     */
    bodysuits() {
        return this.get('bodysuits').then((body) => body);
    }

    /**
     * Rippedlegwear endpoint
     */
    rippedlegwear() {
        return this.get('rippedlegwear').then((body) => body);
    }

    /**
     * Atago endpoint
     */
    atago() {
        return this.get('atago').then((body) => body);
    }

    /**
     * handbras endpoint
     */
    handbras() {
        return this.get('handbras').then((body) => body);
    }

    /**
     * Elf endpoint
     */
    elf() {
        return this.get('elf').then((body) => body);
    }

    /**
     * Ecchibondage endpoint
     */
    ecchibondage() {
        return this.get('ecchibondage').then((body) => body);
    }

    /**
     * Cleavage endpoint
     */
    cleavage() {
        return this.get('cleavage').then((body) => body);
    }

    /**
     * Maid endpoint
     */
    maid() {
        return this.get('maid').then((body) => body);
    }

    /**
     * Usagi endpoint
     */
    usagi() {
        return this.get('usagi').then((body) => body);
    }

    /**
     * Lactation endpoint
     */
    lactation() {
        return this.get('lactation').then((body) => body);
    }

    /**
     * Feet endpoint
     */
    feet() {
        return this.get('feet').then((body) => body);
    }

    /**
     * Lewd endpoint
     */
    lewd() {
        return this.get('lewd').then((body) => body);
    }

    /**
     * Taihou endpoint
     */
    taihou() {
        return this.get('taihou').then((body) => body);
    }

    /**
     * Christmascake endpoint
     */
    christmascake() {
        return this.get('christmascake').then((body) => body);
    }

    /**
     * Rikka endpoint
     */
    rikka() {
        return this.get('rikka').then((body) => body);
    }

    /**
     * Hearts endpoint
     */
    hearts() {
        return this.get('hearts').then((body) => body);
    }

    /**
     * Bisex endpoint
     */
    bisex() {
        return this.get('bisex').then((body) => body);
    }

    /**
     * Smothering endpoint
     */
    smothering() {
        return this.get('smothering').then((body) => body);
    }

    /**
     * Vacuum endpoint
     */
    vacuum() {
        return this.get('vacuum').then((body) => body);
    }

    /**
     * Humiliation endpoint
     */
    humiliation() {
        return this.get('humiliation').then((body) => body);
    }

    /**
     * Forniphilia endpoint
     */
    forniphilia() {
        return this.get('forniphilia').then((body) => body);
    }

    /**
     * Officelady endpoint
     */
    officelady() {
        return this.get('officelady').then((body) => body);
    }

    /**
     * Dtittytouching endpoint
     */
    dtittytouching() {
        return this.get('2dtittytouching').then((body) => body);
    }

    /**
     * Inumimi endpoint
     */
    inumimi() {
        return this.get('inumimi').then((body) => body);
    }

    /**
     * Cumsluts endpoint
     */
    cumsluts() {
        return this.get('cumsluts').then((body) => body);
    }

    /**
     * Heterochromia endpoint
     */
    heterochromia() {
        return this.get('heterochromia').then((body) => body);
    }

    /**
     * Ai endpoint
     */
    ai() {
        return this.get('ai').then((body) => body);
    }

    /**
     * Pokeportn endpoint
     */
    pokeporn() {
        return this.get('pokeporn').then((body) => body);
    }

    /**
     * Rule34 endpoint
     */
    rule34() {
        return this.get('rule34').then((body) => body);
    }

    /**
     * Western endpoint
     */
    western() {
        return this.get('western').then((body) => body);
    }

    /**
     * Lol endpoint
     */
    lol() {
        return this.get('lol').then((body) => body);
    }

    /**
     * Arknuts endpoint
     */
    arknuts() {
        return this.get('arknuts').then((body) => body);
    }

    /**
     * Overwatch endpoint
     */
    overwatch() {
        return this.get('overwatch').then((body) => body);
    }

    /**
     * twob endpoint
     */
    twob() {
        return this.get('2b').then((body) => body);
    }

    /**
     * Kanmusunights endpoint
     */
    kanmusunights() {
        return this.get('kanmusunights').then((body) => body);
    }

    /**
     * Private method used to get endpoints with querys
     */
    async get(endpoint: string, version: string = 'cabul', params?: object) {
        let fetchURL = `${this.baseURL}/${version}/?${endpoint}`;
        if (params) {
            fetchURL += stringify(params);
        }
        const res = await fetch(fetchURL);
        if (res.status !== 200) throw res;
        const data: CabulResponse = await res.json();
        return data;
    }
}

export default CabulClient;
