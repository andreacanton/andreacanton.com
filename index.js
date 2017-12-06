//some important stuff
import _ from 'lodash';
import './css/normalize.css';
import './css/main.css';

//Owners
import OwnerPhotoSrc from './img/me.jpg';
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
    var profiles_introduction = document.createElement('p');
    profiles_introduction.innerHTML = 'Here some of my profiles:';
    profiles.appendChild(profiles_introduction);
    profiles.appendChild(website.profiles_list());
    document.body.appendChild(profiles);

    var owners_photo = new Image();
    owners_photo.alt = owner.name + "'s recent picture";
    owners_photo.src = OwnerPhotoSrc;
    document.body.appendChild(owners_photo);

    return true; //ONLY THE TRUTH!
  },
  profiles_list: function () {
    var list = document.createElement('ul');

    _.each(owner.profiles, function (value, key) {
      var item = document.createElement('li');
      item.id = key + "-link";

      var anchor = document.createElement('a');
      anchor.href = value.url;
      anchor.innerHTML = value.title;
      anchor.rel = "me";

      item.appendChild(anchor);
      list.appendChild(item);
    });
    return list;
  }

}

//Please, initialize the website!
website.init();
//Thank you
