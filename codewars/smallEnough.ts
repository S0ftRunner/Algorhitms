function smallEnough(a: number[], limit: number): boolean {
  let flag = true;

  a.forEach((element) => {
    if (element > limit) flag = false; 
  })

  return flag;
}

/**
 * Ну это вообще несерьезная задача
 * 
 * Лучшее решение:
 * function smallEnough(a: number[], limit: number): boolean{
  return a.every(x => x <= limit)
}
 */