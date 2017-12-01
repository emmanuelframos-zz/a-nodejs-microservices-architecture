export function getCookie(cookieName){
    var value = "; " + document.cookie;
    var parts = value.split("; " + cookieName + "=");

    if (parts.length === 2) {
        return parts[1];
    }
};

export function deleteCookie(cookieName){
    document.cookie = cookieName + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}