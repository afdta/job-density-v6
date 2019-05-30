export default function pal(d){
    var c;
    var n = d.length;

    if(n < 3 || n > 7){
        throw new Error("Data length must be between 3 and 7.")
    }

    if(n==3){
        c = ['#ffc500', '#e45263', '#6800a4'];
    }
    else if(n==4){
        c = ['#ffc500', '#f47859', '#d12168', '#6800a4'];
    }
    else if(n==5){
        c = ['#ffc500', '#f98c50', '#e45263', '#c1006e', '#6800a4'];
    }
    else if(n==6){
        c = ['#ffc500', '#fc974a', '#ee695e', '#d93767', '#b20077', '#6800a4'];
    }
    else if(n==7){
        c = ['#ffc500', '#fd9e44', '#f47859', '#e45263', '#d12168', '#a7007e', '#6800a4'];
    }

    return d3.scaleOrdinal().domain(d).range(c);
}