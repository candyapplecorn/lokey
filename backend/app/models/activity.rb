class Activity < ApplicationRecord
  validates :name, presence: true

  belongs_to :act_type, polymorphic: true
end
