import { gameActions } from '../model';

export const animateCard = (
  dispatch: AppDispatch,
  getState: () => RootState,
  checkMatch: (index1: number, index2: number) => void,
) => {
  let animationFrameId: number;

  const animate = () => {
    const { cardAnimations } = getState().game;
    const keys = Object.keys(cardAnimations);

    keys.forEach((key) => {
      const { progress, isOpening } = cardAnimations[parseInt(key, 10)];
      const newProgress = progress + 0.05;

      if (newProgress < 1) {
        dispatch(
          gameActions.updateCardAnimation({
            key: parseInt(key, 10),
            progress: newProgress,
            isOpening,
          }),
        );
      } else {
        const cardIndex = parseInt(key, 10);

        dispatch(gameActions.removeCardAnimation(cardIndex));

        if (isOpening) {
          dispatch(gameActions.addOpenCard(cardIndex));

          const { openCards } = getState().game;

          const newOpenCards = [...openCards, cardIndex];
          if (newOpenCards.length === 2) {
            setTimeout(() => {
              checkMatch(newOpenCards[0], newOpenCards[1]);
            }, 500);
          }
        } else {
          dispatch(gameActions.removeOpenCard(cardIndex));
        }
      }
    });

    if (Object.keys(getState().game.cardAnimations).length > 0) {
      animationFrameId = requestAnimationFrame(animate);
    }
  };

  animationFrameId = requestAnimationFrame(animate);

  return () => {
    cancelAnimationFrame(animationFrameId);
  };
};
