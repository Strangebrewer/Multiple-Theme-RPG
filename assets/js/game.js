$(window).ready(function () {

  var songArray;
  var playerOneFlag = true;
  var playerTwoFlag = true;
  var playerThreeFlag = true;
  var playerFourFlag = true;
  var defenderFlag = true;
  var countFlag = 0;
  var firstAvatar;
  var secondAvatar;
  var thirdAvatar;
  var fourthAvatar;
  var playerOne;
  var playerTwo;

  // THEME OBJECTS
  // STAR WARS
  var starWars = {
    songs: ["vader-song", "obiwan-song", "luke-song", "porg-song"]
    , backgroundLocation: "assets/images/sw_background.jpg"
    , h1Typeface: "'Orbitron', Arial, Helvetica, sans-serif"
    , heading: "Star Wars"
    , vader: {
      name: "Darth Vader"
      , healthPoints: 213
      , attackPower: 8
      , counterAttackPower: 22
      , healthId: "avatar-one-health"
      , imageLocation: "assets/images/vader.jpg"
      , divId: "avatar-one"
      , defeatLocation: "7 / 2 / auto / auto"
    }
    , obiwan: {
      name: "Obiwan Kenobi"
      , healthPoints: 187
      , attackPower: 9
      , counterAttackPower: 19
      , healthId: "avatar-two-health"
      , imageLocation: "assets/images/obi-wan.jpg"
      , divId: "avatar-two"
      , defeatLocation: "7 / 3 / auto / auto"
    }
    , luke: {
      name: "Luke Skywalker"
      , healthPoints: 230
      , attackPower: 6
      , counterAttackPower: 18
      , healthId: "avatar-three-health"
      , imageLocation: "assets/images/luke.jpg"
      , divId: "avatar-three"
      , defeatLocation: "7 / 4 / auto / auto"
    }
    , porg: {
      name: "a Porg"
      , healthPoints: 155
      , attackPower: 11
      , counterAttackPower: 26
      , healthId: "avatar-four-health"
      , imageLocation: "assets/images/porg.jpg"
      , divId: "avatar-four"
      , defeatLocation: "7 / 5 / auto / auto"
    }
  } // end STAR WARS

  // LORD OF THE RINGS
  var lotr = {
    songs: ["sauron-song", "gandalf-song", "frodo-song", "gollum-song"]
    , backgroundLocation: "assets/images/lotr_background.jpg"
    , h1Typeface: "'Crimson Text', Arial, Helvetica, sans-serif"
    , heading: "Lord of the Rings"
    , sauron: {
      name: "Sauron"
      , healthPoints: 213
      , attackPower: 8
      , counterAttackPower: 22
      , healthId: "avatar-one-health"
      , imageLocation: "assets/images/sauron.jpg"
      , divId: "avatar-one"
      , defeatLocation: "7 / 2 / auto / auto"
    }
    , gandalf: {
      name: "Gandalf"
      , healthPoints: 187
      , attackPower: 9
      , counterAttackPower: 19
      , healthId: "avatar-two-health"
      , imageLocation: "assets/images/gandalf.jpg"
      , divId: "avatar-two"
      , defeatLocation: "7 / 3 / auto / auto"
    }
    , frodo: {
      name: "Frodo Baggins"
      , healthPoints: 230
      , attackPower: 6
      , counterAttackPower: 18
      , healthId: "avatar-three-health"
      , imageLocation: "assets/images/frodo.jpg"
      , divId: "avatar-three"
      , defeatLocation: "7 / 4 / auto / auto"
    }
    , gollum: {
      name: "Gollum"
      , healthPoints: 155
      , attackPower: 11
      , counterAttackPower: 26
      , healthId: "avatar-four-health"
      , imageLocation: "assets/images/gollum.jpg"
      , divId: "avatar-four"
      , defeatLocation: "7 / 5 / auto / auto"
    }
  } // end LORD OF THE RINGS

  // THE MATRIX
  var matrix = {
    songs: ["smith-song", "morpheus-song", "neo-song", "trinity-song"]
    , backgroundLocation: "assets/images/matrix_background.jpg"
    , h1Typeface: "'Courier New', Arial, Helvetica, sans-serif"
    , heading: "the Matrix"
    , smith: {
      name: "Agent Smith"
      , healthPoints: 213
      , attackPower: 8
      , counterAttackPower: 22
      , healthId: "avatar-one-health"
      , imageLocation: "assets/images/smith.jpg"
      , divId: "avatar-one"
      , defeatLocation: "7 / 2 / auto / auto"
    }
    , morpheus: {
      name: "Morpheus"
      , healthPoints: 187
      , attackPower: 9
      , counterAttackPower: 19
      , healthId: "avatar-two-health"
      , imageLocation: "assets/images/morpheus.jpg"
      , divId: "avatar-two"
      , defeatLocation: "7 / 3 / auto / auto"
    }
    , neo: {
      name: "Neo"
      , healthPoints: 230
      , attackPower: 6
      , counterAttackPower: 18
      , healthId: "avatar-three-health"
      , imageLocation: "assets/images/neo.jpg"
      , divId: "avatar-three"
      , defeatLocation: "7 / 4 / auto / auto"
    }
    , trinity: {
      name: "Trinity"
      , healthPoints: 155
      , attackPower: 11
      , counterAttackPower: 26
      , healthId: "avatar-four-health"
      , imageLocation: "assets/images/trinity.jpg"
      , divId: "avatar-four"
      , defeatLocation: "7 / 5 / auto / auto"
    }
  } // end THE MATRIX

  // GAME OF THRONES
  var got = {
    songs: ["daenerys-song", "tyrion-song", "jon-snow-song", "hodor-song"]
    , backgroundLocation: "assets/images/got_background.jpg"
    , h1Typeface: "'Crimson Text', Arial, Helvetica, sans-serif"
    , heading: "Game of Thrones"
    , daenerys: {
      name: "Daenerys"
      , healthPoints: 213
      , attackPower: 8
      , counterAttackPower: 22
      , healthId: "avatar-one-health"
      , imageLocation: "assets/images/daenerys.jpeg"
      , divId: "avatar-one"
      , defeatLocation: "7 / 2 / auto / auto"
    }
    , tyrion: {
      name: "Tyrion"
      , healthPoints: 187
      , attackPower: 9
      , counterAttackPower: 19
      , healthId: "avatar-two-health"
      , imageLocation: "assets/images/tyrion.jpg"
      , divId: "avatar-two"
      , defeatLocation: "7 / 3 / auto / auto"
    }
    , snow: {
      name: "Jon"
      , healthPoints: 230
      , attackPower: 6
      , counterAttackPower: 18
      , healthId: "avatar-three-health"
      , imageLocation: "assets/images/snow.jpg"
      , divId: "avatar-three"
      , defeatLocation: "7 / 4 / auto / auto"
    }
    , hodor: {
      name: "Hodor"
      , healthPoints: 155
      , attackPower: 11
      , counterAttackPower: 26
      , healthId: "avatar-four-health"
      , imageLocation: "assets/images/hodor.jpg"
      , divId: "avatar-four"
      , defeatLocation: "7 / 5 / auto / auto"
    }
  } // end GAME OF THRONES
  // end THEME OBJECTS

  // FADE Functions
  function fadeOut(p1) {
    $(p1).css("animation", "fadeout 1.2s");
    $(p1).css("opacity", "0");
  }

  function fadeIn(p1) {
    $(p1).css("animation", "fadein 1.4s");
    $(p1).css("opacity", "1");
  }

  function fadeInDead(p1) {
    $(p1).css("animation", "fadein3 1.4s");
    $(p1).css("opacity", ".7");
  }
  // end FADE Functions

  // CHOOSE CHARACTER Functions
  function moveEnemies(p1, p2, p3) {
    fadeOut(p1);
    fadeOut(p2);
    fadeOut(p3);
    setTimeout(function () {
      $(p1).css("grid-row", "5");
      $(p1).css("grid-column", "2");
      $(p1 + " img").css("border-color", "#9b0000")
      fadeIn(p1);
    }, 1200)
    setTimeout(function () {
      $(p2).css("grid-row", "5");
      $(p2).css("grid-column", "3 / 5");
      $(p2 + " img").css("border-color", "#9b0000")
      fadeIn(p2);
    }, 1200)
    setTimeout(function () {
      $(p3).css("grid-row", "5");
      $(p3).css("grid-column", "5");
      $(p3 + " img").css("border-color", "#9b0000")
      fadeIn(p3);
    }, 1200)
  }

  function choosePlayerOne(p1, p2, p3, p4) {
    fadeOut(p1);
    fadeOut("#choose-avatar-heading");
    setTimeout(function () {
      $(p1).css("grid-row", "2");
      $(p1).css("grid-column", "2 / 4");
      $(p1 + " img").css("border-color", "#fff")
      $("#choose-avatar-heading").text("Choose Defender");
      fadeIn(p1);
      fadeIn("#your-character-label");
      fadeIn("#choose-avatar-heading")
    }, 1200)
    moveEnemies(p2, p3, p4);
  }

  function chooseDefender(p1) {
    fadeOut(p1);
    $("#choose-avatar-heading").css("animation", "opac2 .5s");
    $("#choose-avatar-heading").css("opacity", ".4");
    setTimeout(function () {
      $(p1).css("grid-row", "2");
      $(p1).css("grid-column", "4 / 6");
      if (countFlag === 2) {
        $("#attack-button").css("display", "block");
      }
      fadeIn(p1);
      fadeIn("#attack-button");
      fadeIn("#versus");
      fadeIn("#defender-label");
      fadeIn("#howard-cosell-two");
    }, 1200);
    defenderFlag = false;
    $("#attack-button").attr("disabled", false);
  }
  // end CHOOSE CHARACTER Functions

  // CHOOSE THEME Functions
  function themeChoice(p1, p2) {
    fadeOut(".choose-theme-heading");
    fadeOut("#button-array");
    fadeOut("#main-heading");
    setTimeout(function () {
      $("#button-array").css("display", "none");
      fadeIn("#main-heading");
      $(".hidden-beginning").css("display", "unset");
      fadeIn(".hidden-beginning");
      $("#main-heading").text(p1);
      $("body").css("background-image", "url('" + p2 + "')");
    }, 2000);
  }

  function colorChanges(p1, p2, p3, p4) {
    setTimeout(function () {
      $("#main-heading").css("font-family", p1);
      $("#main-heading").css("color", p2);
      $("#main-heading").css("text-shadow", "0 0 30px " + p3);
      $(".avatar-box img").css("border", p4);
    }, 2000);
  }

  function assignAvatars(p1, p2, p3, p4, p5) {
    firstAvatar = p1;
    secondAvatar = p2;
    thirdAvatar = p3;
    fourthAvatar = p4;
    songArray = p5;
    $("#avatar-one-name").text(p1.name);
    $("#avatar-two-name").text(p2.name);
    $("#avatar-three-name").text(p3.name);
    $("#avatar-four-name").text(p4.name);
    $("#avatar-one-health").text("Health: " + p1.healthPoints);
    $("#avatar-two-health").text("Health: " + p2.healthPoints);
    $("#avatar-three-health").text("Health: " + p3.healthPoints);
    $("#avatar-four-health").text("Health: " + p4.healthPoints);
    $("#avatar-one-image").attr("src", p1.imageLocation);
    $("#avatar-two-image").attr("src", p2.imageLocation);
    $("#avatar-three-image").attr("src", p3.imageLocation);
    $("#avatar-four-image").attr("src", p4.imageLocation);
  }

  // CHOOSE THEME Buttons
  $("#theme-btn-one").on("click", function () {
    assignAvatars(starWars.vader, starWars.obiwan, starWars.luke, starWars.porg, starWars.songs);
    themeChoice(starWars.heading, starWars.backgroundLocation);
  });

  $("#theme-btn-two").on("click", function () {
    assignAvatars(lotr.sauron, lotr.gandalf, lotr.frodo, lotr.gollum, lotr.songs);
    themeChoice(lotr.heading, lotr.backgroundLocation);
    colorChanges(lotr.h1Typeface, "#c59701", "#000", "6px solid #029aff");
  });

  $("#theme-btn-three").on("click", function () {
    assignAvatars(matrix.smith, matrix.morpheus, matrix.neo, matrix.trinity, matrix.songs);
    themeChoice(matrix.heading, matrix.backgroundLocation);
    colorChanges(matrix.h1Typeface, "#06ac00", "#fff", "6px solid #06ac00");
  });

  $("#theme-btn-four").on("click", function () {
    assignAvatars(got.daenerys, got.tyrion, got.snow, got.hodor, got.songs);
    themeChoice(got.heading, got.backgroundLocation);
    colorChanges(got.h1Typeface, "#757575", "#000", "6px solid #5d00cf");
  });
  // end CHOOSE THEME Buttons

  // CHOOSE AVATAR Buttons
  $("#player-one").on("click", function () {
    if (countFlag > 0 && playerOneFlag && defenderFlag) {
      chooseDefender("#avatar-one");
      playerTwo = firstAvatar;
      currentTwoHealth = playerTwo.healthPoints;
      playerOneFlag = false;
    } else if (playerOneFlag && defenderFlag) {
      choosePlayerOne("#avatar-one", "#avatar-two", "#avatar-three", "#avatar-four");
      playerOne = firstAvatar;
      currentOneHealth = playerOne.healthPoints;
      playerOneFlag = false;
      document.getElementById(songArray[0]).play();
    }
    countFlag++;
  });

  $("#player-two").on("click", function () {
    if (countFlag > 0 && playerTwoFlag && defenderFlag) {
      chooseDefender("#avatar-two");
      playerTwo = secondAvatar;
      currentTwoHealth = playerTwo.healthPoints;
      playerTwoFlag = false;
    } else if (playerTwoFlag && defenderFlag) {
      choosePlayerOne("#avatar-two", "#avatar-one", "#avatar-three", "#avatar-four");
      playerOne = secondAvatar;
      currentOneHealth = playerOne.healthPoints;
      playerTwoFlag = false;
      document.getElementById(songArray[1]).play();
    }
    countFlag++;
  });

  $("#player-three").on("click", function () {
    if (countFlag > 0 && playerThreeFlag && defenderFlag) {
      chooseDefender("#avatar-three");
      playerTwo = thirdAvatar;
      currentTwoHealth = playerTwo.healthPoints;
      playerThreeFlag = false;
    } else if (playerThreeFlag && defenderFlag) {
      choosePlayerOne("#avatar-three", "#avatar-one", "#avatar-two", "#avatar-four");
      playerOne = thirdAvatar;
      currentOneHealth = playerOne.healthPoints;
      playerThreeFlag = false;
      document.getElementById(songArray[2]).play();
    }
    countFlag++;
  });

  $("#player-four").on("click", function () {
    if (countFlag > 0 && playerFourFlag && defenderFlag) {
      chooseDefender("#avatar-four");
      playerTwo = fourthAvatar;
      currentTwoHealth = playerTwo.healthPoints;
      playerFourFlag = false;
    } else if (playerFourFlag && defenderFlag) {
      choosePlayerOne("#avatar-four", "#avatar-one", "#avatar-two", "#avatar-three");
      playerOne = fourthAvatar;
      currentOneHealth = playerOne.healthPoints;
      playerFourFlag = false;
      document.getElementById(songArray[3]).play();
    }
    countFlag++;
  });
  // end CHOOSE AVATAR Buttons

  // ATTACK BUTTON Variables
  var playerOne;
  var playerTwo;
  var undefeatedEnemies = 3
  var attacks = 0;
  var currentOneHealth;
  var currentTwoHealth;

  // ATTACK BUTTON Functions
  function checkOneHealth() {
    if (currentOneHealth <= 0) {
      $("#" + playerOne.healthId).text("Health: 0");
      $("#" + playerTwo.healthId).text("Health: " + currentTwoHealth);
      $("#howard-cosell").text("You have been defeated. GAME OVER!");
      $("#howard-cosell-two").text("");
      $("#attack-button").attr("disabled", true);
      $("#attack-button").css("animation", "fadeout .8s");
      $("#attack-button").css("opacity", "0");
      $("#choose-avatar-heading").css("animation", "fadeout2 .8s");
      $("#choose-avatar-heading").css("opacity", "0");
      fadeOut("#" + playerOne.divId);
      fadeOut("#your-character-label");
      fadeOut("#versus");
      setTimeout(function () {
        $("#" + playerOne.divId).css("grid-area", playerOne.defeatLocation);
        $("#" + playerOne.divId + " img").css("border", "6px solid #000");
        $("#" + playerOne.divId + " img").css("box-shadow", "0 0 30px #029aff");
        fadeInDead("#" + playerOne.divId);
        fadeIn("#graveyard-label");
        $("#reset-button").css("display", "block");
        $("#reset-button").css("animation", "fadein4 1.4s");
        $("#reset-button").css("opacity", ".9");
      }, 2000);
    }
    else {
      $("#" + playerOne.healthId).text("Health: " + currentOneHealth);
      $("#howard-cosell-two").text(playerTwo.name +
        " attacked you back for " +
        playerTwo.counterAttackPower +
        " damage."
      );
    }
  }

  function checkTwoHealth() {
    if (currentTwoHealth <= 0) {
      $("#" + playerTwo.healthId).text("Health: 0");
      $("#" + playerOne.healthId).text("Health: " + currentOneHealth);
      if (undefeatedEnemies === 2) {
        fadeIn("#graveyard-label");
      }
      undefeatedEnemies--;
      fadeOut("#howard-cosell-two");
      setTimeout(function () {
        $("#howard-cosell-two").text("");
      });
      if (currentTwoHealth <= 0 && undefeatedEnemies === 0) {
        $("#choose-avatar-heading").css("animation", "fadeout2 1.2s");
        $("#choose-avatar-heading").css("opacity", "0");
        fadeOut("#versus");
        $("#howard-cosell").text("YOU WIN!");
        $("#attack-button").attr("disabled", true);
        $("#" + playerTwo.divId).css("animation", "fadeout 2s");
        $("#" + playerTwo.divId).css("opacity", "0");
        fadeOut("#attack-button");
        fadeOut("#defender-label");
        setTimeout(function () {
          $("#" + playerTwo.divId).css("grid-area", playerTwo.defeatLocation);
          $("#" + playerTwo.divId + " img").css("border", "6px solid #000");
          $("#" + playerTwo.divId + " img").css("box-shadow", "0 0 30px #029aff");
          fadeInDead("#" + playerTwo.divId);
          fadeIn("#play-again-button");
          $("#play-again-button").css("display", "block");
          defenderFlag = true;
        }, 2000);
      }
      else {
        $("#attack-button").attr("disabled", true);
        $("#" + playerTwo.divId).css("animation", "fadeout 2s");
        $("#" + playerTwo.divId).css("opacity", "0");
        setTimeout(function () {
          $("#choose-avatar-heading").text("Choose Next Defender");
          $("#choose-avatar-heading").css("opacity", "1");
          $("#choose-avatar-heading").css("animation", "opac .8s");
          $("#choose-avatar-heading").css("animation-iteration-count", "infinite");
          defenderFlag = true;
        }, 3000);
        setTimeout(function () {
          $("#choose-avatar-heading").css("animation", "fadeout2 .8s");
          $("#choose-avatar-heading").css("opacity", "0");
          $("#" + playerTwo.divId).css("grid-area", playerTwo.defeatLocation);
          $("#" + playerTwo.divId + " img").css("border", "6px solid #000");
          $("#" + playerTwo.divId + " img").css("box-shadow", "0 0 30px #029aff");
          fadeInDead("#" + playerTwo.divId);
          fadeIn("#graveyard-label");
        }, 2000);
      }
    }
    else {
      $("#" + playerTwo.healthId).text("Health: " + currentTwoHealth);
      currentOneHealth -= playerTwo.counterAttackPower;
      $("#howard-cosell").text("You attacked " +
        playerTwo.name +
        " for " + currentOneAttackPower +
        " damage."
      );
    }
  }
  // end ATTACK BUTTON Functions

  // ATTACK BUTTON
  $("#attack-button").on("click", function () {
    if (attacks > 0) {
      currentOneAttackPower += playerOne.attackPower;
    } else {
      currentOneAttackPower = playerOne.attackPower;
    }
    currentTwoHealth -= currentOneAttackPower;
    checkTwoHealth();
    checkOneHealth();
    attacks++;
  });
  // end ATTACK BUTTON

  // RESET & START OVER BUTTONS
  $("#reset-button").on("click", function () {
    window.location.reload();
  })

  $("#play-again-button").on("click", function () {
    window.location.reload();
  })
  // end RESET & START OVER BUTTONS
});