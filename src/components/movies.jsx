import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import NavBar from "./common/navBar";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],

    pageNumbers: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" }
  };
  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }
  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };
  handleClick = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };
  getPagedData = () => {
    const {
      pageNumbers,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn
    } = this.state;
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageNumbers);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { pageNumbers, currentPage, sortColumn } = this.state;
    const { length: count } = this.state.movies;
    if (count === 0) {
      return <p>There are no movies available</p>;
    }

    const { totalCount, data: movies } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>{totalCount} Available movies</p>
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleClick}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            pageCount={totalCount}
            pageSize={pageNumbers}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
