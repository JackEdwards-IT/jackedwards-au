export const useIsMobile = createSharedComposable(() =>
  useMediaQuery('(max-width: 768px)'),
);
