export interface TicketBook {
  id: string;
  packageType: string;
  quantity: number;
  dateUsed: string;
  fullName: string;
  phoneNumber: number;
  email: string;
}
export interface Pay {
  id: string;
  cardNumber: string;
  cardHolder: string;
  expirationDate: string;
  cvv: string;
}
