interface MajorCredits {
  credits: number;
  brand: 'major';
}

interface MinorCredits {
  credits: number;
  brand: 'minor';
}

function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'major',
  };
}

function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'minor',
  };
}

const math1: MajorCredits = { credits: 3, brand: 'major' };
const math2: MajorCredits = { credits: 4, brand: 'major' };
const art1: MinorCredits = { credits: 1, brand: 'minor' };
const art2: MinorCredits = { credits: 2, brand: 'minor' };

console.log(sumMajorCredits(math1, math2));
console.log(sumMinorCredits(art1, art2));
