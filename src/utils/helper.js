let nameList = [
    'Time','Past','Future','Dev',
    'Fly','Flying','Soar','Soaring','Power','Falling',
    'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
    'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
    'Kitty','Anas','Zero','Umam','Trooper','XX','Bandit',
    'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
    'Mine','Your','Worst','Enemy','Hostile','Force','Video',
    'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
    'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
    'Script','Writer','Near','Close','Open','Cube','Circle',
    'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
    'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
    'Duke','Uzma','Fire','Flame','Morrow','Break','Breaker','Numb',
    'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster',
    'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
    'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
    'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
    'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
    'Zombie','Adeeba','Capt','Captain','Punch','One','Two','Uno','Slice',
    'Alisha','Melt','Melted','Melting','Fell','Wolf','Hound',
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

// JS program to find the n-th prime number


// function to check given number is prime or not
// basic idea is numbers not divided by any primes are primes
function isPrime(k)
{
	// Corner cases
	if (k <= 1)
		return 0;
	if (k==2 || k==3)
		return 1;

	// below 5 there is only two prime numbers 2 and 3 
	if (k % 2 == 0 || k % 3 == 0)
		return 0;

// Using concept of prime number can be represented in form of (6*k + 1) or(6*k - 1) 
	for (let i = 5; i * i <= k; i = i + 6)
		if (k % i == 0 || k % (i + 2) == 0)
			return 0;

	return 1;
}


// function which gives prime at position n
export function nThPrime(n)
{
  console.log('nThPrime called')
	let i=2;
	
	while(n>0)
	{
		// each time if a prime number found decrease n
		if(isPrime(i))
		n--;
		
		i++; //increase the integer to go ahead
	}
	i-=1; // since decrement of k is being done before 
		//Increment of i , so i should be decreased by 1
	return i;
}

