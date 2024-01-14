/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Container,
  Typography,
  Stack,
  Grid,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Card,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [nfts, setNfts] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_ENDPOINT}/nft`)
      .then((response) => {
        console.log(response.data);
        setNfts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <main>
      {/* Hero unit */}
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Album layout
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don&apos;t simply skip over it entirely.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">Main call to action</Button>
            <Button variant="outlined">Secondary action</Button>
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {nfts.map((card: any) => (
            <Grid item key={card?.nft?.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image={card?.metadata?.image}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card?.metadata?.name}
                  </Typography>
                  <Typography>{card?.metadata?.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => nav(`/nft/${card?.nft?.id}`)}
                  >
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
