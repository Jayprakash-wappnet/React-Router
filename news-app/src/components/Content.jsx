import React from 'react'

export default function Content() {
  return (
    <div>
      <div class="row">
        <div class="col">
          <div class="card">
            <img
              src="https://picsum.photos/400/400/?technology"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Service 1</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://picsum.photos/400/400/?coding"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Service 2</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://picsum.photos/400/400/?chemical"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Service 3</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
