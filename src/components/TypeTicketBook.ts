export interface TicketBook {
  packageType: string;
  quantity: number;
  dateUsed: string;
  fullName: string;
  phoneNumber: number;
  email: string;
  // cardNumber: string;
  // cardHolder: string;
  // expirationDate: string;
  // cvv: string;
  // price: number;
  // image: string;
  // namePaySuccess: string;
}
export interface Pay {
  id: string;
  cardNumber: string;
  cardHolder: string;
  expirationDate: string;
  cvv: string;
}
