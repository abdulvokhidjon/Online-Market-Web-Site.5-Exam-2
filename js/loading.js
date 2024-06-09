export const loading = (ispending) => {
  if (ispending) {
    console.log("Loading...");
    // Show loading indicator
  } else {
    console.log("Done!");
    // Hide loading indicator
  }
};
