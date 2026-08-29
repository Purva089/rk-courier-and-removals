import { z } from 'zod';

export enum ShipmentStatusEnum {
  PLACED = 'PLACED',
  PICKED_UP = 'PICKED_UP',
  IN_TRANSIT = 'IN_TRANSIT',
  OUT_FOR_DELIVERY = 'OUT_FOR_DELIVERY',
  DELIVERED = 'DELIVERED'
}

export const trackingLookupSchema = z.object({
  trackingId: z.string().min(1, "Tracking ID is required")
});

export const createShipmentSchema = z.object({
  trackingId: z.string().min(1, "Tracking ID is required"),
  senderName: z.string().min(2, "Sender name is required"),
  receiverName: z.string().min(2, "Receiver name is required"),
  originAddress: z.string().min(5, "Origin address is required"),
  destinationAddress: z.string().min(5, "Destination address is required"),
  weightKg: z.number().positive("Weight must be positive"),
  status: z.nativeEnum(ShipmentStatusEnum).default(ShipmentStatusEnum.PLACED),
  estimatedDelivery: z.string().datetime("Must be a valid ISO datetime string").optional()
});

export const updateStatusSchema = z.object({
  status: z.nativeEnum(ShipmentStatusEnum),
  location: z.string().min(2, "Location is required"),
  note: z.string().optional()
});
