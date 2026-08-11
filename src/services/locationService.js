/**
 * Geolocation & Reverse Geocoding Service for AgriGuard AI
 */

export const getCurrentLocation = () => {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve({
        city: 'Green Valley Agronomy Zone',
        region: 'Central River Delta',
        country: 'Agricultural District #4',
        lat: 14.5995,
        lon: 120.9842,
        isMock: true,
        source: 'Default Agronomy Hub'
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve({
          city: 'Detected Field Location',
          region: `${latitude.toFixed(3)}°N, ${longitude.toFixed(3)}°E`,
          country: 'Local Farm Plot',
          lat: latitude,
          lon: longitude,
          isMock: false,
          source: 'GPS Device'
        });
      },
      (error) => {
        console.warn('Geolocation access denied or timed out. Falling back to default region.', error);
        resolve({
          city: 'Green Valley Agronomy Zone',
          region: 'Central River Delta',
          country: 'Agricultural District #4',
          lat: 14.5995,
          lon: 120.9842,
          isMock: true,
          source: 'Default Micro-Climate Grid'
        });
      },
      { timeout: 8000, maximumAge: 60000 }
    );
  });
};
