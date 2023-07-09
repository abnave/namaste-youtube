var nameList = [
    'Time','Past','Future','Dev',
    'Fly','Flying','Soar','Soaring','Power','Falling',
    'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
    'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
    'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit',
    'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
    'Mine','Your','Worst','Enemy','Hostile','Force','Video',
    'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
    'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
    'Script','Writer','Near','Close','Open','Cube','Circle',
    'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
    'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
    'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
    'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster',
    'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
    'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
    'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
    'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
    'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
    'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
    'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich','Smasher','Extreme','Multi','Universe','Ultimate','Death','Ready','Monkey','Elevator','Wrench','Grease','Head','Theme','Grand','Cool','Kid','Boy','Girl','Vortex','Paradox'
];

export function generateRandomName() {
   return nameList[Math.floor( Math.random() * nameList.length )];
};


export function generateRandomMessage(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

export function displayViewCount(viewCount) {
  if (viewCount) {
    return viewCount.length > 6 ? viewCount.slice(0, viewCount.length - 6) + "M" : viewCount.length > 4 ? viewCount.slice(0, viewCount.length - 3) + "K" : viewCount.length > 3 ? viewCount.slice(0, viewCount.length - 3) + "K" : viewCount;
  }
}

export function displayPublishedBefore(publishedAt) {
  let publishedDate = new Date(publishedAt);
  let currentDate = new Date();
  let timeDifference = currentDate.getTime() - publishedDate.getTime();
  let daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
  let hoursDifference = Math.floor(timeDifference / (1000 * 3600));
  let minutesDifference = Math.floor(timeDifference / (1000 * 60));
  if (daysDifference > 0) {
    if (daysDifference === 1) {
      return daysDifference + " day ago";
    }
    return daysDifference + " days ago";
  }
  if (hoursDifference > 0) {
    return hoursDifference + " hours ago";
  }
  if (minutesDifference > 0) {
    return minutesDifference + " minutes ago";
  }
  if (minutesDifference === 0) {
    return "just now";
  }
}


export function cropTitle(title, maxLength) {
  if (title.length <= maxLength) {
    return title;
  } else {
    return title.substring(0, maxLength) + '...';
  }
}