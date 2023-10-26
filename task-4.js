function getShippingCost(country) {
    const china = 100;
    const chile = 250;
    const australia = 170;
    const jamaica = 120;
    switch (country) {
        case "China":
            return(`"Shipping to ${country} will cost ${china} credits"`);
        case "Chile":
            return(`"Shipping to ${country} will cost ${chile} credits"`);
        case "Australia":
            return(`"Shipping to ${country} will cost ${australia} credits"`);
        case "Jamaica":
        return(`"Shipping to ${country} will cost ${jamaica} credits"`);

        default:
        return "Sorry, there is no delivery to your country"
    }

}
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"