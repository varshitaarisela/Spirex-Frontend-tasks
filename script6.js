
function showProfile(profileId) {

    let profile = document.getElementById(profileId);

    if (profile.innerHTML === "") {

        if (profileId === "profile1") {
            profile.innerHTML = "ECE Student | Frontend Learner";
        }
        else if (profileId === "profile2") {
            profile.innerHTML = "Creative thinker | UI Designer";
        }
        else if (profileId === "profile3") {
            profile.innerHTML = "Problem solver | Java Developer";
        }

    }
    else {
        profile.innerHTML = "";
    }
}
