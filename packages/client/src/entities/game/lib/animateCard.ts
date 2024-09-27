export const animateCard = (
  cardAnimations: { [key: number]: { progress: number; isOpening: boolean } },
  setCardAnimations: React.Dispatch<
    React.SetStateAction<{
      [key: number]: { progress: number; isOpening: boolean };
    }>
  >,
  openCards: number[],
  setOpenCards: React.Dispatch<React.SetStateAction<number[]>>,
  checkMatch: (index1: number, index2: number) => void,
) => {
  let animationFrameId: number;

  const animate = () => {
    setCardAnimations((prev) => {
      const newAnimations: {
        [key: number | string]: { progress: number; isOpening: boolean };
      } = {};

      Object.entries(prev).forEach(([key, { progress, isOpening }]) => {
        const newProgress = progress + 0.05;
        if (newProgress < 1) {
          newAnimations[key] = { progress: newProgress, isOpening };
        } else {
          const cardIndex = parseInt(key, 10);

          if (isOpening) {
            setOpenCards((prevOpen) => {
              if (!prevOpen.includes(cardIndex)) {
                const newOpenCards = [...prevOpen, cardIndex];
                if (newOpenCards.length === 2) {
                  setTimeout(() => {
                    checkMatch(newOpenCards[0], newOpenCards[1]);
                  }, 500);
                }

                return newOpenCards;
              }
              return prevOpen;
            });
          } else {
            setOpenCards((prevOpen) =>
              prevOpen.filter((index) => index !== cardIndex),
            );
          }
        }
      });

      if (Object.keys(newAnimations).length > 0) {
        animationFrameId = requestAnimationFrame(animate);
      }

      return newAnimations;
    });
  };

  animationFrameId = requestAnimationFrame(animate);

  return () => {
    cancelAnimationFrame(animationFrameId);
  };
};
