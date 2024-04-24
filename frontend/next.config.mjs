/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      // Example of remote image pattern
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.example.com',
          port: '',
          pathname: '/account123/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  