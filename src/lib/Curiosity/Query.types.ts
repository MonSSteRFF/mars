export interface Photo {
  camera: {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
  };
  earth_date: string;
  id: number;
  img_src: string;
  rover: {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: number;
  };
  sol: number;
}
