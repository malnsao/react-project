/**
 * 移动端判断
 */
export const isMobile = () =>
  navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
  );

/**
 * 延迟器
 * @param {*} wait
 * @returns
 */
export const isDelay = (wait = 5000) =>
  new Promise((resolve) => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      resolve(true);
    }, wait);
  });

/**
 * 获取游戏2链接
 */
export const getGame2Url = (gameTypeId, gameCode, gameApiId, gameName) => {
  return `/game2?gameTypeId=${gameTypeId}&gameCode=${gameCode}&gameApiId=${gameApiId}&gameName=${gameName}`;
};

/**
 * 获取游戏链接
 */
export const getGameUrl = (gameCode, gameApiId) => {
  return `/game?gameCode=${gameCode}&gameApiId=${gameApiId}`;
};
/**
 * 打开Email
 */
export const openEmail = () => {
  window.open("mailto:support@royalmoon.com");
};
