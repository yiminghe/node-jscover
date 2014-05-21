function x(x1, y1) {
    switch (x1) {
        case 1:
            x1++;
            y1++;
            break;
        default :
            x1 += 2;
            y1 += 2;
    }

    switch (x1 > 1) {
        case true:
            x1++;
            break;
        case false:
            x1--;
            break;
    }
    return {
        x1: x1,
        y1: y1
    };
}