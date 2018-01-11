'use strict';

//some important stuff
import _ from 'lodash';
import './src/main.scss';

//Owners
import OwnerPhotoSrc from './img/me.jpg';
import IconFacebook from './img/icon-facebook.svg';
import IconLinkedin from './img/icon-linkedin.svg';
import IconTwitter from './img/icon-twitter.svg';
const owner = require('./data/owner.json');

//The website
var website = {
  init: function () {
    var title = document.createElement('h1');
    title.innerHTML = _.join([owner.name, owner.surname], ' ');
    document.body.appendChild(title);

    var subtitle = document.createElement('h2');
    subtitle.innerHTML = owner.description;
    document.body.appendChild(subtitle);

    var profiles = document.createElement('section');
    profiles.id = "profiles-section"
    var profiles_introduction = document.createElement('p');
    profiles_introduction.innerHTML = 'Here some of my profiles:';
    profiles.appendChild(profiles_introduction);
    profiles.appendChild(website.profiles_list());

    var owners_photo = new Image();
    owners_photo.id = "owners-photo";
    owners_photo.alt = owner.name + "'s recent picture";
    owners_photo.src = OwnerPhotoSrc;
    profiles.appendChild(owners_photo);

    document.body.appendChild(profiles);

    return true; //ONLY THE TRUTH!
  },
  profiles_list: function () {
    var list = document.createElement('ul');
    var icons = {
      "facebook"  : IconFacebook,
      "linkedin"  : IconLinkedin,
      "twitter"   : IconTwitter
    };

    _.each(owner.profiles, function (value, key) {
      var item = document.createElement('li');

      var anchor = document.createElement('a');
      anchor.id = key + "-link";
      anchor.href = value.url;
      anchor.title = value.title;
      anchor.target = "_blank";
      anchor.rel = "me";

      var icon = document.createElement('img');
      icon.inline = true;
      icon.src = icons[key];

      anchor.appendChild(icon);
      item.appendChild(anchor);
      list.appendChild(item);
    });
    return list;
  }

}

//Please, initialize the website!
website.init();
//Thank you
