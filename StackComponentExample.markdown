# Expo Router `<Stack />` Component Example

This document provides a comprehensive example of the `<Stack />` component in Expo Router, showcasing all available props and screen options, as inherited from React Navigation's native stack navigator. Each prop and option is labeled to indicate its purpose. The example assumes a file-based routing setup with routes like `app/index.tsx`, `app/home.tsx`, and `app/details.tsx`.

## Explanation of Props and Options

### `<Stack />` Props

- **id="mainStack"**: Assigns a unique identifier for referencing in nested navigators.
- **initialRouteName="home"**: Sets `home` as the first route to load.
- **layout**: Wraps the navigator in a container with a breadcrumb showing the current route.
- **screenOptions**: Default options for all screens:
  - **headerStyle**: Orange header background.
  - **headerTintColor**: White back button and title text.
  - **headerTitleStyle**: Bold, 18px title.
  - **headerTitleAlign**: Centers title (Android).
  - **headerBackground**: Custom background component.
  - **headerLargeTitle**: Enables collapsing large title (iOS).
  - **headerLargeTitleStyle**: White, bold, 34px large title.
  - **headerLargeTitleShadowVisible**: Adds shadow under large title.
  - **headerLargeStyle**: Darker orange for large title mode.
  - **headerShown**: Shows headers by default.
  - **headerSearchBarOptions**: Adds search bar with placeholder (iOS).
  - **headerBackButtonDisplayMode**: Minimal back button (no title, iOS).
  - **headerBackButtonMenuEnabled**: Disables back button menu (iOS).
  - **headerBackImageSource**: Custom back button icon.
- **screenListeners**: Logs navigation events (`focus`, `blur`, `beforeRemove`).
- **screenLayout**: Wraps each screen in a suspense boundary with a loading fallback.

### `<Stack.Screen />` Props for `home` Route

- **name="home"**: Maps to `app/home.tsx`.
- **options**:
  - **title**: "Home Screen".
  - **header**: Custom header component.
  - **headerTitle**: Custom title with logo and text.
  - **headerBackVisible**: Hides back button.
  - **headerBackTitle**: "Return" (iOS, not visible).
  - **headerBackTitleStyle**: White, 16px back title.
  - **presentation**: Modal style.
  - **sheetAllowedDetents**: Snaps modal to content height.
- **getId**: Not used here but shown in `details`.

### `<Stack.Screen />` Props for `details` Route

- **name="details"**: Maps to `app/details.tsx`.
- **options**:
  - **title**: "Details Screen".
  - **headerStyle**: Blue header background.
  - **headerShown**: Hides header.
- **getId**: Generates unique ID for dynamic routes.

## Notes

- **File Structure**: Assumes `app/_layout.tsx`, `app/home.tsx`, `app/details.tsx`, and assets (`logo.png`, `back-icon.png`).
- **Platform-Specific**: iOS-only options include `headerLargeTitle`, `headerBackButtonMenuEnabled`, etc.
- **Custom Components**: `CustomHeader`, `HeaderBackground`, `LogoTitle` demonstrate customization. Replace asset paths with actual files.
- **Dynamic Routes**: `getId` ensures unique instances for `details` route.
- **Limitations**: Gradients in `headerBackground` require custom implementation. Some options (e.g., `sheetAllowedDetents`) are experimental.

To use this in a Word document, copy the content and paste it into Microsoft Word, then save as `.doc` or `.docx`. Alternatively, use a Markdown-to-Word converter like Pandoc.
