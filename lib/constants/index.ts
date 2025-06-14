export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Aseds store";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "A modern store built with Next.js and prisma";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
export const LATEST_PRODUCTS_LIMIT =
  Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;

export const signInDefaultValues = {
  email: "admin@example.com",
  password: "123456",
};

export const signUpDefaultValues = {
  name: "AbdoAnssem",
  email: "Sbaiti@simo.com",
  password: "password",
  confirmPassword: "password",
};
export const USER_ROLES = process.env.USER_ROLES
  ? process.env.USER_ROLES.split(", ")
  : ["admin", "user"];
export const shippingAddressDefaultValues = {
  fullName: "John Doe",
  streetAddress: "123 Main St",
  city: "Tata city",
  postalCode: "12345",
  country: "MAR",
};

export const PAYMENT_METHODS = process.env.PAYMENT_METHODS
  ? process.env.PAYMENT_METHODS.split(", ")
  : ["PayPal", "Stripe", "CashOnDelivery"];
export const DEFAULT_PAYMENT_METHOD =
  process.env.DEFAULT_PAYMENT_METHOD || "PayPal";

export const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 4;

export const productDefaultValues = {
  name: "",
  slug: "",
  category: "",
  images: [],
  brand: "",
  description: "",
  price: "0",
  stock: 0,
  rating: "0",
  numReviews: "0",
  isFeatured: false,
  banner: null,
};

export const reviewFormDefaultValues = {
  title: "",
  comment: "",
  rating: 0,
};

export const SENDER_EMAIL = process.env.SENDER_EMAIL || "onboarding@resend.dev";
