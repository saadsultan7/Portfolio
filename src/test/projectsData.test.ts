import { describe, it, expect } from 'vitest';
import { projects, featuredProjects } from '../data/projectsData';

describe('projectsData', () => {
  it('should have unique ids for all projects', () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('should have at least one image for every project', () => {
    projects.forEach((p) => {
      expect(p.imageSrcs.length).toBeGreaterThan(0);
    });
  });

  it('should have title and description for every project', () => {
    projects.forEach((p) => {
      expect(p.title).toBeTruthy();
      expect(p.description).toBeTruthy();
    });
  });

  it('should have a valid type for every project', () => {
    projects.forEach((p) => {
      expect(['web', 'mobile']).toContain(p.type);
    });
  });

  it('featuredProjects should be a subset of projects', () => {
    featuredProjects.forEach((fp) => {
      expect(projects).toContainEqual(fp);
    });
  });

  it('featuredProjects should only include projects with featured=true', () => {
    featuredProjects.forEach((p) => {
      expect(p.featured).toBe(true);
    });
  });
});
