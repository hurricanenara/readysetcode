function finalInstances(instances, averageUtil) {
    console.log(instances, averageUtil)
    let instancesLimit = 2 * (10**8);
    let instancesCopy = instances;
    let i = 0;
    while (i < averageUtil.length) {
        // util at second i
        console.log(`At second ${i}, util is ${averageUtil[i]}, instances number before action is ${instancesCopy}`)
        let util = averageUtil[i];
        if (util < 25) {
            if (instancesCopy > 1) {
                instancesCopy = Math.ceil(instancesCopy / 2);
                console.log(`Util < 25 and instances is greater than 2 at ${instancesCopy}: `)
                i += 10;
            } 
            // else {
            //     console.log(`Util < 25 but instancesCopy is ${instancesCopy}: No action taken, moving onto next util of ${averageUtil[i + 1]}`)
            //     i++
            // }
        } else if (util > 60) {
            let doubled = instancesCopy * 2;
            if (doubled < instancesLimit) {
                instancesCopy = doubled;
                console.log(`Util is > 60, doubled instances is ${doubled}`)
                i += 10;
            } 
            // else {
            //     console.log(`Util > 60 but instances large: No action taken, moving onto next util of ${averageUtil[i + 1]}`)
            //     i++
            // }
        }
            i++
    }
    return instancesCopy;
}