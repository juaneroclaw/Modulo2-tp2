import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';
import Home from '../src/app/page';
import { SiteHeader } from '../src/components/site-header';
import { HeroSection } from '../src/components/hero-section';

describe('Pruebas de Componentes', () => {
  describe('Home Component', () => {
    it('renderiza el componente Home correctamente', async () => {
      await act(async () => {
        render(<Home />);
      });
      expect(screen.getByRole('main')).toBeInTheDocument();
    });
  });

  describe('SiteHeader Component', () => {
    it('renderiza el Header correctamente', async () => {
      await act(async () => {
        render(<SiteHeader />);
      });
      const logo = screen.getByAltText('Henry Logo');
      expect(logo).toBeInTheDocument();
    });
  });

  describe('HeroSection Component', () => {
    it('renderiza el HeroSection correctamente', async () => {
      await act(async () => {
        render(<HeroSection />);
      });
      const heading = screen.getByText('Comienza o acelera tu carrera en tecnología');
      expect(heading).toBeInTheDocument();
    });
  });
});