import axios from 'axios';
import { useQuery } from 'react-query';
import { Box, Typography } from '@mui/material';
import { ThreeDots } from 'react-loader-spinner';

export default function BrandDetails({ id, onClose }) {
  const getBrand = async () => {
    return await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`);
  };

  const { data ,isLoading} = useQuery({
    queryKey: ['brandDetails', id],
    queryFn: getBrand,
  });

  const brandDetails = data?.data.data;

  return (
    <>
      {isLoading ?<ThreeDots
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  /> : <>
              <Box
        sx={{
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          maxWidth: '600px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        <Typography variant="h6" component="h2">
          {brandDetails?.name}
        </Typography>
        <img src={brandDetails?.image} alt={brandDetails?.name} className="w-full rounded" />

        <button onClick={onClose}>Close</button>
      </Box>
      </>}

    </>
  );
}
