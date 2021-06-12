const mockItems = [
    {
        image: 'https://www.ikea.com/cz/cs/images/products/norrnaes-zidle-bila-isunda-seda__0727328_pe735600_s5.jpg?f=g',
        title: 'NORRNÄS',
        tags: ['WOODEN', 'CHAIR'],
        eshop: 'https://www.ikea.com/cz/cs/p/norrnaes-zidle-bila-isunda-seda-50185303/'
    },
    {
        image: 'https://www.ikea.com/cz/cs/images/products/pello-kreslo-holmby-prirodni__38296_pe130209_s5.jpg?f=s',
        title: 'PELLO',
        tags: ['CHAIR', 'OFFICE'],
        eshop: 'https://www.ikea.com/cz/cs/p/pello-kreslo-holmby-prirodni-50078464/'
    },
    {
        image: 'https://www.ikea.com/cz/cs/images/products/bekant-rohovy-stul-pravy-bile-morena-dubova-dyha-bila__0736452_pe740561_s5.jpg?f=s',
        title: 'BEKANT',
        tags: ['TABLE', 'CORNER'],
        eshop: 'https://www.ikea.com/cz/cs/p/bekant-rohovy-stul-pravy-bile-morena-dubova-dyha-bila-s19284659/'
    },
    {
        image: 'https://www.ikea.com/cz/cs/images/products/torhamn-dvirka-pro-roh-spod-skrinku-2-ks-prirodni-jasan__0637746_pe698531_s5.jpg?f=xxxs',
        title: 'TORHAMN',
        tags: ['CABINET', 'WOOD'],
        eshop: 'https://www.ikea.com/cz/cs/p/torhamn-dvirka-pro-roh-spod-skrinku-2-ks-prirodni-jasan-40313424/'
    },
    {
        image: 'https://www.ikea.com/cz/cs/images/products/muren-polohovaci-kreslo-remmarn-svetle-seda__0908542_pe783275_s5.jpg?f=xxxs',
        title: 'MUREN',
        tags: ['CHAIR', 'HOME'],
        eshop: 'https://www.ikea.com/cz/cs/p/muren-polohovaci-kreslo-remmarn-svetle-seda-00438553/'
    },
    {
        image: 'https://www.ikea.com/cz/cs/images/products/skurup-nastenna-lampa-cerna__0687259_pe722000_s5.jpg?f=xl',
        title: 'SKURUP',
        tags: ['LAMP', 'HOME'],
        eshop: 'https://www.ikea.com/cz/cs/p/skurup-nastenna-lampa-cerna-00357354/'
    },
    {
        image: 'https://www.ikea.com/cz/cs/images/products/nordviken-rozkladaci-stul-moridlo-antik__0832852_pe777856_s5.jpg?f=xl',
        title: 'NORDVIKEN',
        tags: ['TABLE', 'KITCHEN'],
        eshop: 'https://www.ikea.com/cz/cs/p/nordviken-rozkladaci-stul-moridlo-antik-00488543/'
    },
    {
        image: 'https://www.ikea.com/cz/cs/images/products/friheten-roh-rozkl-pohovka-s-ul-prostorem-skiftebo-tmave-seda__0175610_pe328883_s5.jpg?f=xl',
        title: 'FRIHETEN',
        tags: ['COUCH', 'HOME'],
        eshop: 'https://www.ikea.com/cz/cs/p/friheten-roh-rozkl-pohovka-s-ul-prostorem-skiftebo-tmave-seda-s39216754/'
    },
    {
        image: 'https://www.ikea.com/cz/cs/images/products/malm-komoda-se-2-zasuvkami-bila__0626822_pe693007_s5.jpg?f=xl',
        title: 'MALM Nightstand',
        tags: ['NIGHTSTAND', 'BEDROOM'],
        eshop: 'https://www.ikea.com/cz/cs/p/malm-komoda-se-2-zasuvkami-bila-80214549/'
    },
    {
        image: 'https://www.ikea.com/cz/cs/images/products/lack-odkladaci-stolek-bila__0702210_pe724345_s5.jpg?f=xl',
        title: 'LACK',
        tags: ['CHAIR', 'HOME'],
        eshop: 'https://www.ikea.com/cz/cs/p/lack-odkladaci-stolek-bila-30449908/'
    },
    {
        image: 'https://www.ikea.com/cz/cs/images/products/songesand-satni-skrin-bila__0555120_pe660185_s5.jpg?f=xl',
        title: 'SONGESAND',
        tags: ['CHAIR', 'HOME'],
        eshop: 'https://www.ikea.com/cz/cs/p/songesand-satni-skrin-bila-90347351/'
    },
    {
        image: 'https://www.ikea.com/cz/cs/images/products/janinge-barova-stolicka-bila__0728069_pe736042_s5.jpg?f=g',
        title: 'JANINGE',
        tags: ['CHAIR', 'OFFICE'],
        eshop: 'https://www.ikea.com/cz/cs/p/janinge-barova-stolicka-bila-70246089/'
    },
    {
        image: 'https://www.ikea.com/cz/cs/images/products/langudden-vestavny-drez-nerezavejici-ocel__0754636_pe747995_s5.jpg?f=xl',
        title: 'LÅNGUDDEN',
        tags: ['SINK', 'KITCHEN'],
        eshop: 'https://www.ikea.com/cz/cs/p/langudden-vestavny-drez-nerezavejici-ocel-s59157391/'
    },
    {
        image: 'https://www.ikea.com/cz/cs/images/products/nymane-stropni-lampa-led-bila__0607738_pe683167_s5.jpg?f=xl',
        title: 'NYMÅNE',
        tags: ['LAMP', 'LIGHT'],
        eshop: 'https://www.ikea.com/cz/cs/p/nymane-stropni-lampa-led-bila-60336274/'
    },
    {
        image: 'https://www.ikea.com/cz/cs/images/products/hemnes-ram-rozkl-pohovky-3-zasuvky-seda__0579884_pe669935_s5.jpg?f=g',
        title: 'HEMNES',
        tags: ['BED', 'BEDROOM'],
        eshop: 'https://www.ikea.com/cz/cs/p/hemnes-ram-rozkl-pohovky-3-zasuvky-seda-60372276/'
    },
    {
        image: 'https://www.ikea.com/cz/cs/images/products/hemnes-tv-stolek-bile-moridlo-svetle-hneda__0583377_pe671187_s5.jpg?f=xl',
        title: 'HEMNES',
        tags: ['TABLE', 'ROOM'],
        eshop: 'https://www.ikea.com/cz/cs/p/hemnes-tv-stolek-bile-moridlo-svetle-hneda-50413526/'
    },
    {
        image: 'https://www.ikea.com/cz/cs/images/products/malm-vysoky-ram-postele-2-ul-dily-bila-luroey__0638626_pe699044_s5.jpg?f=xl',
        title: 'MALM Bed',
        tags: ['BED', 'BEDROOM'],
        eshop: 'https://www.ikea.com/cz/cs/p/malm-vysoky-ram-postele-2-ul-dily-bila-luroey-s19175976/'
    },
    {
        image: 'https://www.ikea.com/cz/cs/images/products/lommarp-skrinka-svetle-bezova__0739329_pe741693_s5.jpg?f=s',
        title: 'LOMMARP',
        tags: ['WORDROBE', 'DRESSER'],
        eshop: 'https://www.ikea.com/cz/cs/p/lommarp-skrinka-svetle-bezova-10436997/'
    },
    {
        image: 'https://www.ikea.com/cz/cs/images/products/riggad-prac-lampa-led-s-bezdr-dobijenim-bila__0314514_pe514214_s5.jpg?f=s',
        title: 'RIGGAD',
        tags: ['LAMP', 'LED'],
        eshop: 'https://www.ikea.com/cz/cs/p/riggad-prac-lampa-led-s-bezdr-dobijenim-bila-60385636/'
    },
    {
        image: 'https://www.ikea.com/cz/cs/images/products/flintan-nominell-kancelarska-zidle-s-podruckami-cerna__0724628_pe734561_s5.jpg?f=s',
        title: 'FLINTAN',
        tags: ['CHAIR', 'OFFICE'],
        eshop: 'https://www.ikea.com/cz/cs/p/flintan-nominell-kancelarska-zidle-s-podruckami-cerna-s29208194/'
    },
    {
        image: 'https://www.ikea.com/cz/cs/images/products/billy-knihovna-bila__0644152_pe702448_s5.jpg?f=s',
        title: 'BILLY',
        tags: ['BOOKSHELF', 'WOOD'],
        eshop: 'https://www.ikea.com/cz/cs/p/billy-knihovna-bila-s59182201/'
    }
]

export default mockItems
