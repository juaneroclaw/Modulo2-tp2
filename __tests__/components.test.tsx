import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';
import { SiteHeader } from '../src/components/site-header';
import { HeroSection } from '../src/components/hero-section';

describe('Pruebas de Componentes', () => {
  describe('Home Component', () => {
    it('renderiza el componente Home correctamente', () => {
      render(<Home />);
      expect(screen.getByRole('main')).toBeInTheDocument();
    });
  });

  describe('SiteHeader Component', () => {
    it('renderiza el Header correctamente', () => {
      render(<SiteHeader />);
      const logo = screen.getByAltText('Henry Logo');
      expect(logo).toBeInTheDocument();
    });
  });

  describe('HeroSection Component', () => {
    it('renderiza el HeroSection correctamente', () => {
      render(<HeroSection />);
      const heading = screen.getByText('Comienza o acelera tu carrera en tecnología');
      expect(heading).toBeInTheDocument();
    });
  });
});