// Do not import directly in declaration file
// Use import("@/store") instead
type RootState = ReturnType<typeof import("@/store").getState>