import axios from 'axios';

const DELHIVERY_API_TOKEN = '34893d8057bd273c9820309963ce7cf4e284804b';
const DELHIVERY_BASE_URL = 'https://track.delhivery.com/api/v1/packages/json';

export interface TrackingResponse {
  status: string;
  statusCode: number;
  scans: Array<{
    scanDateTime: string;
    scanType: string;
    scannedLocation: string;
    instructions: string;
  }>;
  expectedDeliveryDate: string;
  deliveryAddress: string;
}

export const trackPackage = async (trackingId: string): Promise<TrackingResponse> => {
  try {
    const response = await fetch(`${DELHIVERY_BASE_URL}?waybill=${trackingId}`, {
      headers: {
        'Authorization': `Bearer ${DELHIVERY_API_TOKEN}`,
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch tracking information');
    }

    return await response.json();
  } catch (error) {
    console.error('Delhivery tracking error:', error);
    throw new Error('Failed to fetch tracking information');
  }
};