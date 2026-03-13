/**
 * На вход идет число месяца, определить, к какому кварталу он относится
 */

const quarter = (month) => {
  // if (month < 1 && month > 12) return;

  // if (month <= 3) return 1;
  // if (month <= 6) return 2;
  // if (month <= 9) return 3;
  // if (month <= 12) return 4;

  return Math.ceil(month / 3);
}