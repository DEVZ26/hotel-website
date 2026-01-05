let currentUser = prompt("Enter your name:");
if (!currentUser) currentUser = "Guest";

let wishlistData = JSON.parse(localStorage.getItem("wishlist")) || {};

function toggleWishlist(hotelName) {
    if (!wishlistData[hotelName]) {
        wishlistData[hotelName] = [];
    }

    const index = wishlistData[hotelName].indexOf(currentUser);

    if (index === -1) {
        wishlistData[hotelName].push(currentUser);
        alert("Added to wishlist ❤️");
    } else {
        wishlistData[hotelName].splice(index, 1);
        alert("Removed from wishlist ❌");
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlistData));
    showFriendsWishlist();
}

function showFriendsWishlist() {
    const list = document.getElementById("friendWishlist");
    list.innerHTML = "";

    for (let hotel in wishlistData) {
        if (wishlistData[hotel].length > 0) {
            let li = document.createElement("li");
            li.innerHTML = `🏨 <b>${hotel}</b> → ${wishlistData[hotel].join(", ")}`;
            list.appendChild(li);
        }
    }
}

showFriendsWishlist();
