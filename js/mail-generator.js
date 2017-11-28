var emails = [
    {
      sender: 'Mary Monster',
      email: 'marymonster@gmail.com',
      subject: 'Call Your Mother',
      message: 'I am never gonna see a merman, ever. You haven\'t seen my drawer of inappropriate starches?',
      date: {
        year: 2016,
        month: 7,
        day: 24,
        hour: 23,
        minute: 23,
        second: 23,
        millisecond: 999
      },
      folder: 'inbox'
    },
    {
      sender: 'Dave Danger',
      email: 'davedanger@gmail.com',
      subject: 'Cheap Online Meds',
      message: 'I\'ll kill a man in a fair fight. Or if I think he\'s gonna start a fair fight. Or if he bothers me. Or if there\'s a woman. Or if I\'m getting paid. Mostly when I\'m getting paid. I thought all children despise effort and enjoy cartoons. Don\'t be ridiculous. Martha Stewart isn\'t a demon. She\'s a witch. Someone else\'s loss is my chocolatey goodness. I don\'t want to use the word genius, but I\'d be ok if you wanted to. What did I say to you about barging into my shuttle? Now you can luxuriate in a nice jail cell, but if your hand touches metal, I swear by my pretty floral bonnet: I will end you. Oh Spike, devour me! You\'re gonna die screaming but you won\'t be heard. Eyeballs to entrails, my sweet.',
      date: {
        year: 2016,
        month: 8,
        day: 7,
        hour: 0,
        minute: 10,
        second: 65,
        millisecond: 795
      },
      folder: 'inbox'
    },
    {
      sender: 'Spam Master',
      email: 'spammaster@gmail.com',
      subject: 'Change Your Life Today',
      message: 'We need to save Buffy from Hansel and Gretel. Well, you were busy trying to get yourself lit on fire. The only thing Willow was ever good for, the only thing I ever had going for me were those moments, just moments, where Tara would look at me and I was wonderful. Everyone\'s a hero in their own way, in their own not that heroic way. Planet\'s coming up a mite fast.',
      date: {
        year: 2016,
        month: 9,
        day: 20,
        hour: 11,
        minute: 30,
        second: 55,
        millisecond: 111
      },
      folder: 'inbox'
    },
    {
      sender: 'Spike Spurner',
      email: 'spikespurner@gmail.com',
      subject: 'Spooky Stories',
      message: 'Better to cut you down to size, grandma. I\'m the one who brings about the thought-pocalypse. Yeah, it was sexy the way she touched me real hard with her fists. I dislike that Anya. She\'s newly human and strangely literal.',
      date: {
        year: 2017,
        month: 1,
        day: 7,
        hour: 4,
        minute: 30,
        second: 20,
        millisecond: 100
      },
      folder: 'inbox'
    },
    {
      sender: 'Ray Ranger',
      email: 'rayranger@gmail.com',
      subject: 'Meet Singles In Your Area',
      message: 'Yeah, well, I\'m not the one who wanted Wind Beneath My Wings for the first dance. She\'s a truck-driving magic mama! And I\'m a huge fan of the way you lose control and turn into an enormous green rage monster. We\'re outlaws with hearts of gold. Or even worse, a sneezure.',
      date: {
        year: 2017,
        month: 2,
        day: 14,
        hour: 5,
        minute: 51,
        second: 40,
        millisecond: 735
      },
      folder: 'inbox'
    },
    {
      sender: 'Catherine Chaos',
      email: 'catherinechaos@gmail.com',
      subject: 'Have You Heard',
      message: 'Oh my god! Did it sing? Turns out I suddenly find myself needing to know the plural of apocalypse. It\'s about women. It was like the Heimlich, with stripes! First of all, Feng Shui up the yin yang, also I designed parts of it but I did not design the stone cold foxes in the small clothes and the ample massage facilities. That girl will rain destruction down on you and your ship. Sweetie, if he had a tussle with that Sasquatch, we\'d be in the dirt right about now, scooping up the Captain\'s teeth. You can\'t spend the rest of your life waiting for Xander to wake up and smell the hottie. Either blow us all up or rub soup in our hair. It\'s a toss-up. I think calling him that is an insult to the psychotic lowlife community.',
      date: {
        year: 2017,
        month: 3,
        day: 15,
        hour: 6,
        minute: 58,
        second: 41,
        millisecond: 745
      },
      folder: 'inbox'
    },
    {
      sender: 'Van Pire',
      email: 'vanpire@gmail.com',
      subject: 'Yo!',
      message: 'Xander, that\'s not the North Star, it\'s an airplane. You can\'t open the book of my life and jump in the middle. What do they need such good eyesight for anyway? Well we could grind our enemies into talcum powder with a sledgehammer but, gosh, we did that last night. The gentlemen are coming by. You can\'t take the sky from me. Okay, at this point you\'re abusing sarcasm. Well, I haven\'t been to a hell dimension just of late, but I do know a thing or two about torment.',
      date: {
        year: 2017,
        month: 2,
        day: 20,
        hour: 11,
        minute: 51,
        second: 40,
        millisecond: 735
      },
      folder: 'inbox'
    },
    {
      sender: 'Andy Argye',
      email: 'andyargye@gmail.com',
      subject: 'RE: Looking for a three legged cat',
      message: 'And now the one person who should be here is gone, and a waste like you gets to live. The human mind is like Van Halen; if you just pull out one piece and keep replacing it, it just degenerates. Turns out I suddenly find myself needing to know the plural of apocalypse. It\'s a real burn, being right so often. Who\'s calling me? Everybody I know lives here.',
      date: {
        year: 2017,
        month: 5,
        day: 2,
        hour: 10,
        minute: 51,
        second: 40,
        millisecond: 735
      },
      folder: 'inbox'
    },
    {
      sender: 'Rick Roger',
      email: 'rickroger@gmail.com',
      subject: 'Get Rich Quick',
      message: 'Looking in windows, knocking on doors. Well, look at me. I\'m all fuzzy. And what\'s with all the carrots? That girl will rain destruction down on you and your ship. If I could make you purtier, I would. I wanna hurt you, but I can\'t resist the sinister attraction of your cold and muscular body! Seems odd you\'d name your ship after a battle you were on the wrong side of.',
      date: {
        year: 2017,
        month: 2,
        day: 14,
        hour: 5,
        minute: 10,
        second: 40,
        millisecond: 700
      },
      folder: 'inbox'
    },
    {
      sender: 'Shoe Mai',
      email: 'shoemai@gmail.com',
      subject: 'FW: Token Chain Email',
      message: 'I\'m a comfortador also. You\'re a hell of a woman. Passion rules us all. You\'re gonna die screaming but you won\'t be heard. How did your brain even learn human speech? I\'m just so curious. Occasionally, I\'m callous and strange.',
      date: {
        year: 2017,
        month: 6,
        day: 15,
        hour: 5,
        minute: 51,
        second: 40,
        millisecond: 735
      },
      folder: 'inbox'
    }
  ];

//create a selectedEmail variable
var selectedEmail = false;
//create a shortcut for div ID emailList
var emailTable = document.getElementById('emailTable');
//create selected folder VARIABLE
var selectedFolder = "inbox";
//compose email emailForm
var emailForm = document.getElementById('emailForm');
var col1Header = '';
var col1 = '';
//////////////////////////////END OF VARIABLES///////////////////////

//sort emails array by words
function sortByName(arg){
  emails.sort(function(a,b){
    var nameA = a[arg].toUpperCase();
    var nameB = b[arg].toUpperCase();
    if (nameA < nameB){
      return -1;
    }
    if (nameA > nameB){
      return 1;
    }
    return 0;
  });
  displayEmailList(selectedFolder);
}

//sort emails array by date
function sortByDate(){
  emails.sort(function(a,b){
    return dateSort(a.date.year, b.date.year, dateSort(
      a.date.month, b.date.month, dateSort(
        a.date.day, b.date.day, dateSort(
          a.date.hour, b.date.hour, dateSort(
            a.date.minute, b.date.minute, dateSort(
              a.date.second, b.date.second, dateSort(
                a.date.millisecond, b.date.millisecond, 0
              )
            )
          )
        )
      )
    ));
  });
  displayEmailList(selectedFolder);
}

//date sort function
function dateSort(arg1, arg2, tmpfunc){
  if(arg1 > arg2){
    return -1;
  } else if (arg1 < arg2) {
    return 1;
  } else {
    return tmpfunc;
  }
}

//folder count function
function folderCount(){
  //create folderCount object
  var allFolderCount = {
    inbox: 0,
    junk: 0,
    drafts: 0,
    sent: 0,
    deleted: 0
  };
  //increment allFolderCount by 1 for each folder matching
  emails.forEach(function(element) {
    switch (element.folder){
      case 'inbox':
        allFolderCount.inbox++;
        break;
      case 'junk':
        allFolderCount.junk++;
        break;
      case 'drafts':
        allFolderCount.drafts++;
        break;
      case 'sent':
        allFolderCount.sent++;
        break;
      case 'deleted':
        allFolderCount.deleted++;
        break;
    }
  });
  //insert counts into corresponding folder spans
  document.getElementById('inboxMsgCount').innerHTML = allFolderCount.inbox;
  document.getElementById('junkMsgCount').innerHTML = allFolderCount.junk;
  document.getElementById('draftsMsgCount').innerHTML = allFolderCount.drafts;
  document.getElementById('sentMsgCount').innerHTML = allFolderCount.sent;
  document.getElementById('deletedMsgCount').innerHTML = allFolderCount.deleted;
}

//openEmail function
function openEmail(arg) {
  //create div off screen
    //fill in information of clicked email
    document.querySelector("#subject").innerHTML = emails[arg].subject;
    document.querySelector("#sender").innerHTML = emails[arg].sender;
    document.querySelector("#email").innerHTML = emails[arg].email;
    var date = emails[arg].date;
    document.querySelector("#date").innerHTML = `${date.month}/${date.day}/${date.year} ${date.hour}:${date.minute}`;
    document.querySelector("#emailMsg").innerHTML = emails[arg].message;
  //save email index to selectedEmail variable
    selectedEmail = emails[arg];
  //apply emailMsgOn class to Div #emailMsgDiv
    document.getElementById("emailMsgDiv").className = "emailMsgOn";
    document.getElementById("composeDiv").className = "emailMsgOff";
}

function displayEmailList(mailBox){
  if (mailBox === 'inbox' || mailBox === 'junk' || mailBox === 'deleted'){
    col1Header = 'From';
    col1 = 'sender';
  } else {
    col1Header = 'To';
    col1 = 'recipient';
  }
  emailTable.innerHTML =
  `<tr id="emailTableHeader">
		<th id="fromHeader" onclick="sortByName(col1)">${col1Header}</th>
		<th id="subjectHeader" onclick="sortByName('subject')">Subject</th>
		<th id="dateHeader" onclick="sortByDate()">Date</th>
	</tr>`;
  for(var i=0; i<emails.length; i++) {
    if(emails[i].folder === mailBox){
      var date = emails[i].date;
      emailTable.innerHTML +=
      // create onclick event for each row
          `<tr class="emailLine" onclick="openEmail(${i})">
            <td><b>${emails[i][col1]}</b></td>
            <td><b>${emails[i].subject} &#8226</b>
            <span id='preview'>${emails[i].message}</span></td>
            <td><b>${date.month}/${date.day}/${date.year}</b></td>
          </tr>`;
    }
  }
}

//move email into folder
function buttonToFolder(button, folder){
  //button to put email into deleted folders
  document.getElementById(button).addEventListener("click", function(){
  //change folder to deleted
    selectedEmail.folder = folder;
  //close close EmailMsgDiv
    document.getElementById("emailMsgDiv").className = "emailMsgOff";
  //run folderCount function
    folderCount();
    displayEmailList(selectedFolder);
  });
}

// change email to folder
function changeEmailToFolder(newFolder){
  //change folder to deleted
    selectedEmail.folder = newFolder;
  //close close EmailMsgDiv
    document.getElementById("emailMsgDiv").className = "emailMsgOff";
  //run folderCount function
    folderCount();
    displayEmailList(selectedFolder);
    //close close EmailMsgDiv
      document.getElementById("emailMsgDiv").className = "emailMsgOff";
}

//change selectedFolder
function changeSelectedFolder(newFolder){
  selectedFolder = newFolder;
  var cache = newFolder + 'Folder';
  document.querySelector('.boldFolderTxt').classList.remove('boldFolderTxt');
  document.getElementById(cache).className += 'boldFolderTxt';
  displayEmailList(newFolder);
}

//compose composeNewMsg
function composeNewMsg(){
  document.getElementById("emailMsgDiv").className = "emailMsgOff";
  document.getElementById('composeDiv').className = "emailMsgOn";
}

//close composeNewMsg pane
function closeComposeDiv(){
  document.getElementById('emailForm').reset();
  document.getElementById('composeDiv').className = "emailMsgOff";
}

//add new email to emails array
function addNewEmail(savedFolder){
  var date = new Date();
  var newEmail = {
    sender: 'This Is Me',
    email: 'myemail@geemail.com',
    subject: emailForm.subject.value,
    message: emailForm.message.value,
    date: {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
      millisecond: date.getMilliseconds()
    },
    folder: savedFolder,
    recipient: emailForm.recipient.value
  };
  //add new email to the beginning of emails array
  emails.unshift(newEmail);
  //refresh the screen with updated information
  displayEmailList(selectedFolder);
  folderCount();
  closeComposeDiv();
}

//reply button FUNCTION
function reply(){
  //element.setAttribute(value, text)
  document.getElementsByName('recipient')[0].value = selectedEmail.email;
  document.getElementsByName('subject')[0].value = 'RE:' + selectedEmail.subject;
  document.getElementsByName('message')[0].value = "\n-------------------------------\n" + selectedEmail.message;
  document.getElementById('composeDiv').className = "emailMsgOn";
}

//forward button function
function forward(){
  document.getElementsByName('subject')[0].value = 'FW:' + selectedEmail.subject;
  document.getElementsByName('message')[0].value = "\n-------------------------------\n" + selectedEmail.message;
  document.getElementById('composeDiv').className = "emailMsgOn";
}
////////////////////////////////END OF FUNCTIONS//////////////////////////////////////////

// insert email rows into div ID emailRows
sortByDate();
changeSelectedFolder('inbox');

//add click event listner to closeEmailMsgDiv
document.getElementById('closeEmailMsg').addEventListener("click", function(){
  //apply emailMsgOff class to Div #emailMsgDiv
  document.getElementById("emailMsgDiv").className = "emailMsgOff";
});

//run folderCount
folderCount();

//delete button to put email into deleted folders
document.getElementById("deleteBtn").addEventListener("click", function(){
  changeEmailToFolder('deleted');
});
//junk button to put email into junk folder
document.getElementById("junkBtn").addEventListener("click", function(){
  changeEmailToFolder('junk');
});
//inbox button to put email into inbox folder
document.getElementById("inboxBtn").addEventListener("click", function(){
  changeEmailToFolder('inbox');
});
